// JStructure 0.0.0
// Joseph Dailey 2014
// MIT License

window.jstructure = {};
window.jstructure.__resizeHandler = null;

/*pageinit
 *onInit
 *Params event
 *Triggered on the page being initialized, after initialization occurs.*/
$(document).on("pageinit", "[data-role='page']", function(event){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onInit !== undefined)
		jstructure[$(this).attr("id")].onInit(event);
 });


/*Before Show/Hide*/
/*pagebeforehide
 *onBeforeHide
 *Triggered on the “fromPage” we are transitioning away from, before the actual transition animation is kicked off.
 *Params event, data
 *Returns Bundle
 */
$(document).on("pagebeforehide", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onBeforeHide !== undefined)
		jstructure[$(this).attr("id")].BeforeHideBundle = jstructure[$(this).attr("id")].onBeforeHide(event, data);
 });
/*pagebeforeshow
 *onBeforeShow
 *Params event, data, bundle
 *Triggered on the “toPage” we are transitioning to, before the actual transition animation is kicked off.
 */
$(document).on("pagebeforeshow", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onBeforeShow !== undefined)
		jstructure[$(this).attr("id")].onBeforeShow(event, data, jstructure[$(this).attr("id")].BeforeHideBundle);
 });

/*Show/Hide*/
/*pageshow
 *onShow
 *Params event, data
 *Triggered on the “toPage” after the transition animation has completed.
 */
$(document).on("pageshow", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onShow !== undefined)
		jstructure[$(this).attr("id")].onShow(event, data, jstructure[$(this).attr("id")].onHideBundle);
	/*window Resize
	 *onResize
	 *Params window_width, window_height
	 *Triggered on a change in the window size.*/
	__resizeHandler = $(window).resize(function(){
		if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onResize !== undefined)
			jstructure[$(this).attr("id")].onResize($(window).width(), $(window).height());
	});
 });
/*pagehide
 *onHide
 *Params event, data
 *Triggered on the “fromPage” after the transition animation has completed.
 *Returns bundle
 */
$(document).on("pagehide", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onHide !== undefined)
		jstructure[$(this).attr("id")].onHideBundle = jstructure[$(this).attr("id")].onHide(event, data);
	// clear the window resize handler
	__resizeHandler = null;
 });


/*Create/Remove*/
/*pagebeforecreate 
 *onBeforeCreate
 *Params event, bundle
 *Triggered on the page being initialized, before most plugin auto-initialization occurs.
 */
$(document).on("pagebeforecreate", "[data-role='page']", function(event){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onBeforeCreate !== undefined)
		jstructure[$(this).attr("id")].onBeforeCreate(event, jstructure[$(this).attr("id")].BeforeCreateBundle);
 });
/*pagecreate
 *onCreate
 *Params event
 *Triggered when the page has been created in the DOM (via ajax or other) and 
 *after all widgets have had an opportunity to enhance the contained markup.
 */
$(document).on("pagecreate", "[data-role='page']", function(event){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onCreate !== undefined)
		jstructure[$(this).attr("id")].onCreate(event, jstructure[$(this).attr("id")].onRemoveBundle);
 });
/*pageremove
 *onRemove
 *Params event
 *Triggered just before the framework attempts to remove an external page from the DOM.*/
$(document).on("pageremove", "[data-role='page']", function(event){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onRemove !== undefined)
		jstructure[$(this).attr("id")].onRemoveBundle = jstructure[$(this).attr("id")].onRemove(event);
 });

/*Load*/
/*pagebeforeload
 *onBeforeLoad
 *Params event, data
 *Triggered before any load request is made.*/
$(document).on("pagebeforeload", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onBeforeLoad !== undefined)
		jstructure[$(this).attr("id")].onBeforeLoad(event, data);
 });
/*pageload
 *onLoad
 *Params event, data
 *Triggered after the page is successfully loaded and inserted into the DOM.*/
$(document).on("pageload", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onLoad !== undefined)
		jstructure[$(this).attr("id")].onLoad(event, data);
 });
/*pageloadfailed
 *onLoadFail
 *Params event, data
 *Triggered if the page load request failed.*/
$(document).on("pageloadfailed", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onLoadFail !== undefined)
		jstructure[$(this).attr("id")].onLoadFail(event, data);
 });

/*Change*/
/*pagebeforechange
 *onBeforeChange
 *Params event, data
 *Triggered twice during the page change cyle: First prior to any page loading or transition
 *and next after page loading completes successfully, but before the browser history has been modified by the navigation process.*/
$(document).on("pagebeforechange", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onBeforeChange !== undefined)
		jstructure[$(this).attr("id")].onBeforeChange(event, data);
 });
/*pagechange
 *onChange
 *Params event, data
 *This event is triggered after the changePage() request has finished loading the page into the DOM
 *and all page transition animations have completed.*/
$(document).on("pagechange", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onChange !== undefined)
		jstructure[$(this).attr("id")].onChange(event, data);
 });
/*pagechangefailed
 *onChangeFailed
 *Params event, data
 *Triggered when the changePage() request fails to load the page.*/
$(document).on("pagechangefailed", "[data-role='page']", function(event, data){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onChangeFailed !== undefined)
		jstructure[$(this).attr("id")].onChangeFailed(event, data);
 });

/*orientationchange
 *onOrientationChange
 *Params event
 *Triggered just before the framework attempts to remove an external page from the DOM.*/
$(document).on("orientationchange", "[data-role='page']", function(event){
	if(jstructure[$(this).attr("id")] !== undefined && jstructure[$(this).attr("id")].onOrientationChange !== undefined)
		jstructure[$(this).attr("id")].onOrientationChange(event, data);
 });

