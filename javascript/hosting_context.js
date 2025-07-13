import environmentConfig from './environment_config.js';

window.addEventListener('DOMContentLoaded', () => {
    const infoDiv = document.createElement('div');
    infoDiv.id = 'service-info';
    infoDiv.style.marginTop = '2em';
    infoDiv.innerHTML = `<h2>Container Unique Deployment Information</h2><strong>Service Name:</strong> ${environmentConfig.SERVICE_NAME} <br><strong>Service Port:</strong> ${environmentConfig.SERVICE_PORT}`;
    document.body.appendChild(infoDiv);
});
