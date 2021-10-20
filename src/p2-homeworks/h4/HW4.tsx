import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText]= useState<string>('');
    const [error, setError] = useState<string>('');

    const showAlert = () => {
        if (!text) {
             alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    setError={setError}
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />

                  {/*<SuperInputText
                      setError={setError}
                      value={text}
                      onChangeText={setText}
                      onEnter={showAlert}
                      error={error}
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                />*/}

             {/*  ----------------------------------------------------*/}

                  <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                ----------------------------------------------------

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

        </div>
    )
}

//происходит измененпие локального стейта компонеты
//изменение пропсов компонеты
export default HW4
