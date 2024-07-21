(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("head")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0603/9371/7992/t/1/assets/appstle-subscription.js?v=1646905526");

      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "div.grid.myaccount",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "\u55AE\u6B21\u8CFC\u8CB7",
        "shop": "ooevd-shop.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "\u8CFC\u8CB7\u9078\u9805",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "\u8A02\u95B1\u65B9\u6848",
        "sellingPlanSelectTitle": "\u8A02\u95B1\u53CA\u767C\u8CA8\u8A73\u60C5",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "\u8A02\u95B1\u65B9\u6848\u8A73\u60C5",
        "api_key": "",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>\u96A8\u6642\u96A8\u5730\u7BA1\u7406\u60A8\u7684\u8A02\u95B1<\/strong><br\/><br\/>\u8A02\u95B1\u5F8C\uFF0C\u60A8\u53EF\u96A8\u6642\u767B\u5165\u5E33\u6236\uFF0C\u4EE5\u67E5\u95B1\u3001\u7BA1\u7406\u3001\u4FEE\u6539\u767C\u8CA8\u65E5\u671F\uFF0C\u751A\u81F3\u53D6\u6D88\u60A8\u7684\u8A02\u95B1\u65B9\u6848",
        "tooltipDescriptionOnPrepaidPlan": "<b>\u9810\u4ED8\u65B9\u6848\u8A73\u60C5<\/b><\/br> \u7E3D\u8CBB\u7528\uFF1A {{totalPrice}} ( \u6BCF\u671F\u8CBB\u7528\uFF1A {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>\u6298\u6263\u8A73\u60C5<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "\u8A02\u95B1\u65B9\u6848",
        "orderStatusManageSubscriptionDescription": "\u60A8\u53EF\u96A8\u6642\u4EE5\u96FB\u90F5\u767B\u5165\uFF0C\u67E5\u770B\u53CA\u7BA1\u7406\u60A8\u7684\u8A02\u95B1\u65B9\u6848",
        "orderStatusManageSubscriptionButtonText": "\u7BA1\u7406\u60A8\u7684\u8A02\u95B1",
        "subscriptionOptionSelectedByDefault" : true,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/\u6BCF\u671F\u6536\u8CBB",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": true,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/\u6BCF\u671F\u6536\u8CBB)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "\u7BC0\u7701 {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>\u7BA1\u7406\u8A02\u95B1<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": false,
        "appstlePlanName": "FREE",
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "#eeedf1",
            },

            "appstle_circle": {
                "border-color": "#eeedf1",
            },

            "appstle_dot": {
                "background-color": "#eeedf1",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "#eeedf1",
            },

            "appstle_tooltip": {
                "color": "#eeedf1",
                "background-color": "#eeedf1",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "#eeedf1",
            },

            "appstle_subscription_final_price": {
                "color": "#eeedf1",
            },
            "appstle_widget_text_color": {
                "color": "#eeedf1",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
