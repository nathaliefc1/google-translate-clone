import SelectDropDown from "./SelectDropDown"

const TextBox = ({style, selectedLanguage}) => {

    return (
        <div className={style}>
            <SelectDropDown
                style= {style}
                selectedLanguage={selectedLanguage}
            />
            <textarea
                placeholder={style === 'input'? 'Enter Text' : 'Translation'}
                disabled={style === 'output'}
                />
        </div>
    )
}

export default TextBox