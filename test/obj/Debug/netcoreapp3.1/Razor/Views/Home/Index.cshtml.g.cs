#pragma checksum "D:\DL3C\test\test\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "922bf628e92d24054ad39e6f4b7695e1b137a5b1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\DL3C\test\test\Views\_ViewImports.cshtml"
using test;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\DL3C\test\test\Views\_ViewImports.cshtml"
using test.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"922bf628e92d24054ad39e6f4b7695e1b137a5b1", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"04aae2d41d7a1f2a1b7badf4f453e10febdd2915", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\DL3C\test\test\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div id=""mapDiv"">
    <div id=""HomeButtonDiv"">
        <i class=""fa-solid fa-pen-ruler""></i>

    </div>

    <div id=""LocateButtonDiv""></div>

    <div id=""measurementButton"">
        <i class=""fa-solid fa-pen-ruler""></i>
    </div>
    <div class=""card card-panel no-width"" id=""measurementContainer"">
        <h5 class=""card-header"">Công cụ đo</h5>
        <div class=""card-body"">
            <div id=""measurementDiv""></div>
        </div>
    </div>

    <div id=""basemapGalleryButton"">
        <i class=""fa-regular fa-map""></i>
    </div>
    <div class=""card card-panel no-width"" id=""basemapGalleryContainer"">
        <h5 class=""card-header"">Bản đồ nền</h5>
        <div class=""card-body"">
            <div id=""basemapGalleryDiv""></div>
        </div>
    </div>

    <div id=""dirButton"">
        <i class=""fa-solid fa-route""></i>
    </div>
    <div class=""card card-panel no-width"" id=""dirContainer"">
        <!--<h5 class=""card-header"">Bản đồ nền</h5>-->

        <div class=""card");
            WriteLiteral("-body\">\r\n            <div id=\"dir\"></div>\r\n        </div>\r\n    </div>\r\n    \r\n\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591