import React, { useEffect } from "react";
import styled from "styled-components";

const InputSelect = ({ options, value, setValue }) => {
    useEffect(() => {
        if (options.length < 1) {
            setValue("Brak dodanych kategorii");
        }
    }, [options]);

    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <SelectWrap>
            <SelectInput value={value} onChange={handleChange}>
                {options?.length > 0 &&
                    options.map(category => (
                        <StyledOption key={category} value={category}>
                            {category}
                        </StyledOption>
                    ))}
            </SelectInput>
        </SelectWrap>
    );
};

export default InputSelect;

const SelectWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectInput = styled.select`
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-size: 1.2rem;
    padding: 0.25rem 0;
    border: ${({ theme }) => `2px solid ${theme.colors.light}`};
    font-weight: 600;
    padding-left: 1rem;
    width: 6rem;
    border-radius: 4px;
`;
const StyledOption = styled.option``;
