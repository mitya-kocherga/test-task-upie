import React, { useState, Fragment, useCallback } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Button from '../Button';

interface DropDownProps {
    value?: string;
    options: string[];
}

export const DropDown = ({ value, options }: DropDownProps) => {
    const [open, setOpen] = useState(false);
    const [currentValue, setValue] = useState(value);
    const selectValue = useCallback((option) => () => {
        setValue(option);
        setOpen(false);
    }, [])
    const handleOutsideClick = useCallback(() => {
        setOpen(false);
    }, [])
    const handleOpen = useCallback(() => setOpen(!open), [open])
    return (
        <Fragment>
            <Button
                text={currentValue || 'select value'}
                outlined
                onClick={handleOpen}
                className="drop-down-button"
            />
            {
                open ?
                    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                        <div className="drop-down-list">
                            <ul>
                                {

                                    options.map(option => (
                                        <li className="drop-down-elem" onClick={selectValue(option)}>
                                            {option}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </OutsideClickHandler>
                    : null
            }
        </Fragment>
    )
}
