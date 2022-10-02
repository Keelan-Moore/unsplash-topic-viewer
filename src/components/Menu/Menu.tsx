import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchTopics} from '../../api/Unsplash';
import { Topic } from '../../types/Topic';
import FocusableItem from '../FocusableItem/FocusableItem';
import useFocus from '../../utils/useFocus';
import { useKeyDown } from '../../utils/useKeyDown';


interface NavBarProps {
    topicList?: Topic[];
    setNewActiveTopic: Function,
    isMenuActive: boolean,
    setMenuActive: Function
}



export const Menu: React.FC<NavBarProps> = ({topicList, setNewActiveTopic,isMenuActive, setMenuActive}) => {    

    const { isLoading, data, error } = useQuery(['todos'], fetchTopics)
    const [focus, setFocus] = useFocus(10,1,1,0,0);
    
    
    if (isLoading)
    {
        return <span> .... loading</span>;
    }

    const flexContainerStyle = 'top-0 left-0 h-screen flex flex-col shrink-0 bg-gray-500 shadow-md'

  return (
    <>
        {
            isMenuActive ? (
                <div className = {`${flexContainerStyle} basis-1/5`}>
                { data && data.map((topic: Topic, index) => (
                    <FocusableItem 
                        className='text-center py-3 mb-0.5 bg-gray-200 focus:bg-gray-500 focus:border-l-orange-400 focus:border-l-8 transition-all' 
                            index={index} 
                            focus={isMenuActive ? focus === index: false} 
                            setFocus={isMenuActive ? setFocus : undefined} 
                            onFocus={() => setNewActiveTopic(topic.id)}
                            listKey={topic.id}>
                        <button 
                            className='' 
                            tabIndex = {1}
                            onClick = {() => setMenuActive(false)}> 
                            {topic.title}
                        </button>
                    </FocusableItem>))}
                     </div>) : (<div></div>)
    }    
    </>
  );
}

export default Menu;
