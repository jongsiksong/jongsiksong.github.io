$(document).ready(function(){var l="",c="",r=0,n=0;$(".text-userid").val(localStorage.getItem("mySteemUser")),$(".button-search").click(function(){var a=$(".text-userid").val();steem.api.getAccounts([a],function(e,t){console.log(e,t[0]),$(".label-few-member").text(t[0].id),$(".label-steem-balance").text(t[0].balance),$(".label-sbd-balance").text(t[0].sbd_balance),l=t[0].balance,c=t[0].sbd_balance,l=l.replace(" STEEM",""),c=c.replace(" SBD",""),$(".label-steem-mv").text(Math.floor(r*Number(l))),$(".label-sbd-mv").text(Math.floor(n*Number(c))),localStorage.setItem("mySteemUser",a)})});var e=$(".text-userid").val();steem.api.getAccounts([e],function(e,t){console.log(e,t[0]),$(".label-few-member").text(t[0].id),$(".label-steem-balance").text(t[0].balance),$(".label-sbd-balance").text(t[0].sbd_balance),l=t[0].balance,c=t[0].sbd_balance,l=l.replace(" STEEM",""),c=c.replace(" SBD",""),$(".label-steem-mv").text(Math.floor(r*Number(l))),$(".label-sbd-mv").text(Math.floor(n*Number(c)))}),steem.api.getAccountCount(function(e,t){$(".label-member-count").text(t)}),$.ajax({type:"GET",async:!1,url:"https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/10?code=CRIX.UPBIT.KRW-STEEM",success:function(e){var t=$.parseJSON(JSON.stringify(e));$(".label-steem-price").text(t[0].tradePrice),r=t[0].tradePrice}}),$.ajax({type:"GET",async:!1,url:"https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/10?code=CRIX.UPBIT.KRW-SBD",success:function(e){var t=$.parseJSON(JSON.stringify(e));$(".label-sbd-price").text(t[0].tradePrice),n=t[0].tradePrice}})});