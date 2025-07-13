/** this file is used to add environment variables for 
 * use in the site, so that each Docker container shows
 * a different site based on its unique configuration.
*/

let environmentConfig = {
    SERVICE_NAME: "${SERVICE_NAME}",
    SERVICE_PORT: "${SERVICE_PORT}"
}

export default environmentConfig;