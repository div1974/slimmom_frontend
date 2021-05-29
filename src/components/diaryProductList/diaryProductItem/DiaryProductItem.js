import React from 'react'
import { CSSTransition } from 'react-transition-group';
import '../../../styles/components/diaryProductItem.scss';

const DiaryProductItem = ({ onClick, title, kcal, weight, id, screenWidth }) => {
    const vowels = ['а', 'о', 'э', 'и', 'у', 'ы', 'е', 'ё', 'ю', 'я'];


    return (
        <>

        <CSSTransition
            in={true}
            appear={true}
            classNames="titleSlide"
            timeout={500}
            unmountOnExit
        >
           <div className='productItem'>
                <ul className='innerListDairyProduct'>
                    <li className='innerItemDairyProduct'>
                        {screenWidth < 768 ?
                        (<ul style={{ listStyle: "none" }}>
                        {title.split(" ").map(word => (
                            <li key={word}>
                                {word.length > 9 ? 
                                vowels.some(letter => letter === word[8]) && vowels.some(letter => letter === word[9]) ?
                                word.slice(0, 8) + '.' :
                                vowels.some(letter => letter === word[9]) && vowels.indexOf(word[8] ===-1) ?
                                word.slice(0, 9) + '.' :
                                word.slice(0, 10) + "." : word}
                            </li>
                        ))}
                        </ul>) : (
                            <span>{title}</span>
                        )}
                    </li>
                    <li className='innerItemDairyProduct'>{weight}г</li>
                    <li className='innerItemDairyProduct'>{kcal.toFixed(0)}ккал</li>
                    <li className='innerItemDairyProduct'>
                        <button className='buttonItemDairyProduct' type="button" onClick={onClick} data-id={id}>
                            &#10005;
                        </button>
                    </li>
                </ul>
            </div> 
            </CSSTransition>
        </>
    )
}

export default DiaryProductItem
