﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MapHive.Server.Core;

namespace MapHive.WebClient.Host
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Page.InjectMhCfg(Request.Url.AbsoluteUri.Replace(Request.Url.LocalPath, "/"));
        }
    }
}