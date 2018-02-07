// 
function FormInput(props) {
    let formInput = document.createElement('input');

    // destructuring
    formInput.setAttribute('class', props.className);
    formInput.setAttribute('type', props.type);
    formInput.setAttribute('name', props.name);
    formInput.setAttribute('value', props.value);
    formInput.setAttribute('placeholder', props.placeholder);

    if (props.readonly) {
        formInput.setAttribute('readonly', true);
    }

    return formInput;

}
export default FormInput