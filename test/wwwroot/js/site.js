var map;

require(["esri/map", "esri/Color", "esri/dijit/HomeButton", "esri/dijit/LocateButton",
    "esri/dijit/Scalebar", "esri/dijit/Measurement", "dojo/dom",
    "esri/dijit/BasemapGallery", "esri/layers/FeatureLayer", "esri/symbols/TextSymbol",
    "esri/layers/LabelClass", "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol",
    "esri/renderers/SimpleRenderer", "esri/dijit/Directions", "esri/dijit/Popup", "dojo/dom-construct", "esri/dijit/PopupTemplate",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
    "dojo/domReady!"],
    function (Map, Color, HomeButton, LocateButton, Scalebar, Measurement,
        dom, BasemapGallery, FeatureLayer, TextSymbol, LabelClass, SimpleLineSymbol,
        SimpleFillSymbol, SimpleRenderer, Directions, Popup, domConstruct, PopupTemplate
    ) {

        var linkTruong = "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/TRUONG_DH/FeatureServer/0"
        var linkQuan = "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/QUAN_HUYEN/FeatureServer/0"

        var popup = new Popup({
            offsetX: 20,
            offsetY: 20,
            zoomFactor: 1,

        }, domConstruct.create("div"));

        map = new Map("mapDiv", {
            basemap: "topo-vector",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
            center: [106.65134632709486, 10.809670661457051], // longitude, latitude
            zoom: 10,
            logo: false,
            sliderPosition: "bottom-right",
            showLabels: true,
            infoWindow: popup
        });

       
        //tao nut home
        var homeButton = new HomeButton({
            map: map,
        }, "HomeButtonDiv");
        homeButton.startup();
        //tao nut locatebutton
        var geoLocate = new LocateButton({
            map: map
        }, "LocateButtonDiv");
        geoLocate.startup();
        // tao scalebar
        var Scalebar = new Scalebar({
            map: map,
            // "dual" displays both miles and kilometers
            // "english" is the default, which displays miles
            // use "metric" for kilometers
            scalebarUnit: "metric",
            attachTo: "bottom-left"
        });
        //tao cong cu do
        var measurement = new Measurement({
            map: map
        }, dom.byId("measurementDiv"));
        measurement.startup();

        // tao lua chon base map
        var basemapGallery = new BasemapGallery({
            showArcGISBasemaps: true,
            map: map
        }, "basemapGalleryDiv");
        basemapGallery.startup();

        basemapGallery.on("error", function (msg) {
            console.log("basemap gallery error:  ", msg);
        });

        
        var TruongColor = new Color("#000000");
        var QuanLine = new SimpleLineSymbol("solid", TruongColor, 1.5);
        var QuanSymbol = new SimpleFillSymbol("solid", QuanLine, new Color([255, 255, 0, 0]));
        var QuanRenderer = new SimpleRenderer(QuanSymbol);

        var templateTruong = new PopupTemplate({
            title: "Thông tin trường",
            fieldInfos: [
                { fieldName: "TEN_TRUONG", label: "Tên trường", visible: true},
                { fieldName: "DIA_CHI", label: "Địa chỉ", visible: true},
                { fieldName: "WEBSITE", label: "Website", visible: true},
                { fieldName: "SDT", label: "Số điện thoại", visible: true}
            ],
        });

        //tao layer truong dh
        var TruongLayer = new FeatureLayer(linkTruong, {
            infoTemplate: templateTruong,
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"]
        });

        var templateQuan = new PopupTemplate({
            title: "Thông tin quận",
            fieldInfos: [
                { fieldName: "DISTRICT_NAME", label: "Tên quận", visible: true },
                { fieldName: "DAN_SO", label: "Dân số", visible: true },
                { fieldName: "DIEN_TICH", label: "Diện tích", visible: true },
                { fieldName: "SL_DH", label: "Số lượng trường Đại học", visible: true }
            ],
        });
       
        //tao layer quan
        var QuanLayer = new FeatureLayer(linkQuan, {
            infoTemplate: templateQuan,
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"]
        });
        QuanLayer.setRenderer(QuanRenderer);

        // create a text symbol to define the style of labels
        //Định dạng chữ cho label
        var TruongLabel = new TextSymbol().setColor(TruongColor);
        TruongLabel.font.setSize("9pt");
        TruongLabel.font.setFamily("arial");

        //Trường dữ liệu dùng để làm label
        var json = {
            "labelExpressionInfo": { "value": "{TEN_TRUONG}" }
        };

        //create instance of LabelClass (note: multiple LabelClasses can be passed in as an array)
        //Tạo label
        var labelClass = new LabelClass(json);
        labelClass.symbol = TruongLabel; // symbol also can be set in LabelClass' json
        TruongLayer.setLabelingInfo([labelClass]);
        map.addLayers([QuanLayer,TruongLayer]);

        //Chức năng click vào trường nào thì hiện thông tin trường đó 
        //TruongLayer.on("click", function (evt) {
        //    var attrs = evt.graphic.attributes;
        //    console.log(evt.graphic);
        //    console.log(evt.graphic.geometry);

        //    var content = "";
        //    content += "<div>Tên trường: " + attrs.TEN_TRUONG + "</div>";
        //    content += "<div>Địa chỉ: " + attrs.DIA_CHI + "</div>";
        //    content += "<div>Website: " + attrs.WEBSITE + "</div>";
        //    content += "<div>Số điện thoại: " + attrs.SDT + "</div>";

        //    map.infoWindow.setTitle("Thông tin trường học");
        //    map.infoWindow.resize(400, 500);
        //    map.infoWindow.setContent(content);

        //    map.infoWindow.show(evt.graphic.geometry, map.getInfoWindowAnchor(evt.graphic.geometry));
        //});

        //Chức năng click vào quận nào thì hiện thông tin quận đó 
        //QuanLayer.on("click", function (evt) {
        //    var attrs = evt.graphic.attributes;
        //    console.log(evt.graphic);
        //    console.log(evt.graphic.geometry);

        //    var content = "";
        //    content += "<div>Tên quận: " + attrs.DISTRICT_NAME + "</div>";
        //    content += "<div>Dân số: " + attrs.DAN_SO  + "</div>";
        //    content += "<div>Diện tích: " + attrs.DIEN_TICH + "</div>";
        //    content += "<div>Số lượng trường Đại học: " + attrs.SL_DH  + "</div>";

        //    map.infoWindow.setTitle("Thông tin Quận Huyện");
        //    map.infoWindow.resize(400, 500);
        //    map.infoWindow.setContent(content);

        //    map.infoWindow.show(evt.graphic.geometry, map.getInfoWindowAnchor(evt.graphic.geometry));
        //});

        //tao chi duong
        var directions = new Directions({
            map: map,
            showClearButton: true,
        }, "dir");
        directions.startup();

        // chức năng đóng mở button
        var isOpenMeasurement = false;
        var isOpenBasemapGallery = false;
        var isOpenDỉr = false;

        $("#measurementButton").click(function () {
            if (isOpenMeasurement == false) {
                closeEverything();
                $("#measurementContainer").addClass("has-width");
                $("#measurementContainer").removeClass("no-width");
                isOpenMeasurement = true;
            }
            else {
                closeEverything();
            }
        });
        $("#basemapGalleryButton").click(function () {
            if (isOpenBasemapGallery == false) {
                closeEverything();
                $("#basemapGalleryContainer").addClass("has-width");
                $("#basemapGalleryContainer").removeClass("no-width");
                isOpenBasemapGallery = true;
            }
            else {
                closeEverything();
            }
        });
        $("#dirButton").click(function () {
            if (isOpenDỉr == false) {
                closeEverything();
                $("#dirContainer").addClass("has-width");
                $("#dirContainer").removeClass("no-width");
                isOpenDỉr = true;
            }
            else {
                closeEverything();
            }
        });

        function closeEverything() {
            $(".card-panel").addClass("no-width");
            $(".card-panel").removeClass("has-width");
            isOpenMeasurement = false;
            isOpenBasemapGallery = false;
            isOpenDỉr = false;
        }
    });

