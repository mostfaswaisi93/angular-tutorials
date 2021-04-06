import './hello-world-button.css';
class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        body.appendChild(button);
    }
}

export default HelloWorldButton;