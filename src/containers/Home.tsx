import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopics } from '../api/Unsplash';
import { Topic } from '../types/Topic';
import Menu from '../components/Menu/Menu';
import { toEditorSettings } from 'typescript';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { act } from 'react-dom/test-utils';
import { useKeyDown } from '../utils/useKeyDown';
import useFocus from '../utils/useFocus';


interface NavBarProps {}

export const Home: React.FC = () => {

    const { isLoading, data: topicData, error } = useQuery(['todos'], fetchTopics)
    const [activeTopic, setActiveTopic] = useState<string>();

    const [gridFocus, setGridFocus] = useFocus(10, 1,1,2,2);
    
    const [isMenuActive, setMenuActive] = useState(true);
    const [enterPressed, resetEnterKeyDown] = useKeyDown("Enter");
    const [backspacePressed, resetBackSpaceKeyDown] = useKeyDown("Backspace");


    if (enterPressed) {
        setMenuActive(false)
        setGridFocus(0);
        resetEnterKeyDown(false);
    }
    if (backspacePressed && !isMenuActive) {
        setMenuActive(true);
        setGridFocus(0);
        resetBackSpaceKeyDown(false)
    }

    if (isLoading)
    {
        return <span> .... loading</span>;
    }

    if (!activeTopic && topicData ) {
        setActiveTopic(topicData[0].id);
    }

  return (
    <div className='flex'>
        <Menu topicList={topicData} setNewActiveTopic={setActiveTopic} isMenuActive={isMenuActive} setMenuActive={setMenuActive}/>
        {activeTopic && 
            <ImageGrid 
                topicId= {activeTopic}
                isMenuActive = {isMenuActive}
                gridFocus = {gridFocus}
                setGridFocus = {setGridFocus}
                />}
    </div>
  );
}

export default Home;
