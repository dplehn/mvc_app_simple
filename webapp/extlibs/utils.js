function showenv() {

    var l_Level = jQuery.sap.log.getLevel();
    jQuery.sap.log.setLevel(jQuery.sap.log.Level.INFO);

    // Get reference the Core object
    var oCore = sap.ui.getCore();

    // Read Core
    var oLibMap = oCore.getLoadedLibraries();
    for (var key in oLibMap) {
        jQuery.sap.log.info("Loaded Library name", key);
    }
    jQuery.sap.log.info("Has model?", oCore.hasModel().toString());
    jQuery.sap.log.info("Is mobile?", oCore.isMobile().toString());

    // Read Configuration object from the Core
    var oConfig = oCore.getConfiguration();
    jQuery.sap.log.info("Accessibility", oConfig.getAccessibility().toString());
    jQuery.sap.log.info("Debug", oConfig.getDebug().toString());
    jQuery.sap.log.info("Language", oConfig.getLanguage());
    jQuery.sap.log.info("Locale", oConfig.getLocale());
    jQuery.sap.log.info("Version of SAPUI5 Framework", oConfig.getVersion());
    jQuery.sap.log.info("Theme", oConfig.getTheme());
    jQuery.sap.log.info("User agent", navigator.userAgent);

    // Reset the log level to default of ERROR
    jQuery.sap.log.setLevel(l_Level);

}
