import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchImages, fetchTopics} from '../../api/Unsplash';
import { Topic } from '../../types/Topic';
import useFocus from '../../utils/useFocus';
import FocusableItem from '../FocusableItem/FocusableItem';


interface ImageGridProps {
    topicId: string;
    isMenuActive: boolean;
    gridFocus: number;
    setGridFocus: Function;
}

export const ImageGridProps: React.FC<ImageGridProps> = ({topicId, isMenuActive, gridFocus: focus, setGridFocus: setFocus}) => { 
       
    const { isLoading, data: imageList, error } = useQuery(['topicImages', topicId], () => fetchImages(topicId)) 

   //console.log(`grid focus: ${focus}`)
  return (
    <div className='mt-4 ml-4 flex flex-col basis-4/5 flex-grow-0 shrink-0'>
        <div className = 'grid gap-4 grid-flow-col [grid-template-rows:repeat(2,minmax(0,45vh))] [grid-auto-columns:30vw]	'>
            {imageList &&
                (
                imageList.map((image, index) => (
                    
                    <FocusableItem 
                        className='focus:bg-gray-500 focus:border-orange-400 focus:border-8 transition-all' 
                            index={index} 
                            focus={isMenuActive ? false: focus === index} 
                            setFocus={isMenuActive ? undefined : setFocus} 
                            listKey={image.id}>
                            <img
                                className='flex w-full h-full object-cover'
                                src={image.urls.regular}
                                alt="car"
                            />
                    </FocusableItem>

                    
                ))
                )
            }
        </div>
    </div>
  );
}

export default ImageGridProps;
