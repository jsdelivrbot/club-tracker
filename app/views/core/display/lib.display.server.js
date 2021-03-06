/**
 * Returns a DisplayObject instance for an alert-success.
 * 
 * @param {string} content The content to display.
 * @returns {DisplayObject} A DisplayObject instance with the success alert.
 */
var getSuccess = function(content) {
  return getDisplayObject('alert-success', content, 'alertSuccess', 'top', 'alerts');
};


/**
 * Returns a DisplayObject instance for an alert-error.
 * 
 * @param {string} content The content to display.
 * @returns {DisplayObject} A DisplayObject instance with the error alert.
 */
var getError = function(content) {
  return getDisplayObject('alert-error', content, 'alertError', 'top', 'alerts');
};


/**
 * Returns a DisplayObject instance to be used in the Display class.
 *
 * Two types of display types can be generated: an alert-{type} or a card,
 * where {type} can be success, warning, error, or information. The content
 * of the display can be an HTML-formatted string or just a plain string.
 * An optional id for a card can be specified. Cards can be added to the top
 * or bottom of other cards with the optional position argument. By default
 * cards are positioned at the bottom. An option reset parameter is available
 * to clear the display of alerts, cards, or both before updating the display.
 * A flag to close the current display is also available.
 *
 * @param {string} type The display type, either alert-{type} or card,
 *    where {type} can be success, warning, error, or information.
 * @param {string} content The content to display.
 * @param {string} reset Clear the display of alerts, cards, or both before
 *    updating. Default is null.
 * @return {object} An instance of DisplayObject.
 */
var getDisplayObject = function(type, content, reset) {
  // Assign default values as Google's server 'gs' does not support
  // ES6 default parameter values in the function definition
  reset = (undefined === reset ? null : reset);

  var displayObject = {
    type: type,
    content: content,
    reset: reset
  };
  return displayObject;
};


/**
 * Returns the content of the filename to be displayed in an HTML template.
 *
 * @param {string} filename The name of the file with the html content.
 * @returns {string} An HTML-formatted string with the content of the file.
 */
function include(filename) {
  var content = HtmlService.createHtmlOutputFromFile(filename).getContent();
  return content;
}