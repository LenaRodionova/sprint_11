export function setError(element) {
    element.classList.add('error-message_is-displayed');
}

export function reset(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
    errorElement.classList.remove('error-message_is-displayed');
}