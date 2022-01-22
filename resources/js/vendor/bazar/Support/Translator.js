export default class Translator
{
    /**
     * Create a new translator instance.
     *
     * @param  {object}  translations
     * @return {void}
     */
    constructor(translations = {})
    {
        this.translations = translations;
    }

    /**
     * Get and replace the string of the given string.
     *
     * @param  {object}  translations
     * @param  {string}  string
     * @param  {object}  replace
     * @return {string}
     */
    __(string, replace = {})
    {
        string = this.translations[string] || string;

        for (let placeholder in replace) {
            string = string.toString()
                .replace(`:${placeholder}`, replace[placeholder])
                .replace(`:${placeholder.toUpperCase()}`, replace[placeholder].toString().toUpperCase())
                .replace(
                    `:${placeholder.charAt(0).toUpperCase()}${placeholder.slice(1)}`,
                    replace[placeholder].toString().charAt(0).toUpperCase() + replace[placeholder].toString().slice(1)
                );
        }

        return string.toString().trim();
    }
}
