let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}});let chartIdBullReturn=document.getElementById("chart-container-bull-return");function drawHighcharts(){Highcharts.chart(chartIdBullReturn,{chart:{type:"area",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:2},title:{text:null},data:{googleSpreadsheetKey:"1Jv-5Y6hj-fSXSjCq6sH1aNKLY3ZhmjtpYDE7eVcK6Ds"},plotOptions:{series:{groupPadding:.1}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow",formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}},max:3500,min:0,tickAmount:8},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},annotations:[{labels:[{point:{x:1581704965e3,y:0,xAxis:0,yAxis:0},align:"right",text:"Bull market<br><b>400.5% gain</b>",y:0,x:0,allowOverlap:!0},{point:{x:1236364165e3,y:3495,xAxis:0,yAxis:0},align:"left",text:"March 9, 2009",y:0,x:0,allowOverlap:!0},{point:{x:1581704965e3,y:3495,xAxis:0,yAxis:0},align:"right",text:"February 19, 2020",y:0,x:-5,allowOverlap:!0}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}setTimeout(function(){if(""===chartIdBullReturn.innerHTML){let e=document.getElementsByClassName("chart-area-bull-return");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZEJ1bGxSZXR1cm4iLCJkcmF3SGlnaGNoYXJ0cyIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0Iiwic3BhY2luZ0xlZnQiLCJ0aXRsZSIsInRleHQiLCJkYXRhIiwiZ29vZ2xlU3ByZWFkc2hlZXRLZXkiLCJwbG90T3B0aW9ucyIsInNlcmllcyIsImdyb3VwUGFkZGluZyIsImxlZ2VuZCIsImVuYWJsZWQiLCJ4QXhpcyIsImxhYmVscyIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwieUF4aXMiLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJmb3JtYXR0ZXIiLCJudW1iZXJGb3JtYXQiLCJ0aGlzIiwidmFsdWUiLCJtYXgiLCJtaW4iLCJ0aWNrQW1vdW50IiwiY3JlZGl0cyIsInRvb2x0aXAiLCJzaGFkb3ciLCJwYWRkaW5nIiwiYW5ub3RhdGlvbnMiLCJwb2ludCIsIngiLCJ5IiwiYWxpZ24iLCJhbGxvd092ZXJsYXAiLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJjaGFydEFyZWEiLCJkaXNwbGF5IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQWVBLElBQUFBLFFBQUFDLFNBQUFDLHVCQUFBLGlCQUNBQyxTQUFBRixTQUFBRyxlQUFBLGNBQ0EsSUFBQUQsU0FDQSxJQUFBLElBQUFFLEVBQUEsRUFBQUEsRUFBQUwsUUFBQU0sT0FBQUQsSUFDQUwsUUFBQUssR0FBQUUsTUFBQUMsV0FBQSxNQUlBQyxXQUFBQyxXQUFBLENBQ0FDLEtBQUEsQ0FDQUMsYUFBQSxPQUlBLElBQUFDLGtCQUFBWixTQUFBRyxlQUFBLCtCQWlCQSxTQUFBVSxpQkFDQUwsV0FBQU0sTUFBQUYsa0JBQUEsQ0FDQUUsTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLElBQ0FDLFlBQUEsR0FFQUMsTUFBQSxDQUNBQyxLQUFBLE1BRUFDLEtBQUEsQ0FDQUMscUJBQUEsZ0RBR0FDLFlBQUEsQ0FDQUMsT0FBQSxDQUNBQyxhQUFBLEtBb0JBQyxPQUFBLENBQ0FDLFNBQUEsR0FFQUMsTUFBQSxDQUNBQyxPQUFBLENBQ0F4QixNQUFBLENBQ0F5QixXQUFBLFdBR0FDLFdBQUEsR0FFQUMsTUFBQSxDQUNBYixPQUFBLEVBQ0FVLE9BQUEsQ0FDQUksU0FBQSxFQUNBQyxTQUFBLFFBQ0FDLFVBQUEsV0FDQSxPQUFBNUIsV0FBQTZCLGFBQUFDLEtBQUFDLE1BQUEsRUFBQSxJQUFBLE9BR0FDLElBQUEsS0FDQUMsSUFBQSxFQUNBQyxXQUFBLEdBRUFDLFFBQUEsQ0FDQWYsU0FBQSxHQUVBZ0IsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsSUFFQUMsWUFBQSxDQUFBLENBQ0FqQixPQUFBLENBQUEsQ0FDQWtCLE1BQUEsQ0FDQUMsRUFBQSxhQUNBQyxFQUFBLEVBQ0FyQixNQUFBLEVBQ0FJLE1BQUEsR0FFQWtCLE1BQUEsUUFDQTlCLEtBQUEsb0NBQ0E2QixFQUFBLEVBQ0FELEVBQUEsRUFDQUcsY0FBQSxHQUNBLENBQ0FKLE1BQUEsQ0FDQUMsRUFBQSxhQUNBQyxFQUFBLEtBQ0FyQixNQUFBLEVBQ0FJLE1BQUEsR0FFQWtCLE1BQUEsT0FDQTlCLEtBQUEsZ0JBQ0E2QixFQUFBLEVBQ0FELEVBQUEsRUFDQUcsY0FBQSxHQUNBLENBQ0FKLE1BQUEsQ0FDQUMsRUFBQSxhQUNBQyxFQUFBLEtBQ0FyQixNQUFBLEVBQ0FJLE1BQUEsR0FFQWtCLE1BQUEsUUFDQTlCLEtBQUEsb0JBQ0E2QixFQUFBLEVBQ0FELEdBQUEsRUFDQUcsY0FBQSxNQUdBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBM0MsTUFBQSxDQUNBSSxhQUFBLElBRUFTLE9BQUEsQ0FDQXdCLE1BQUEsT0FDQUYsR0FBQSxJQUVBTCxRQUFBLENBQ0FoQixTQUFBLFNBeElBOEIsV0FBQSxXQUNBLEdBQUEsS0FBQTlDLGtCQUFBK0MsVUFBQSxDQUVBLElBQUFDLEVBQUE1RCxTQUFBQyx1QkFBQSwwQkFDQSxJQUFBLElBQUFHLEVBQUEsRUFBQUEsRUFBQXdELEVBQUF2RCxPQUFBRCxJQUNBd0QsRUFBQXhELEdBQUFFLE1BQUF1RCxRQUFBLE9BR0E3RCxTQUFBRyxlQUFBLGtCQUFBd0QsV0FBQSw0SUFJQSxLQW9JQSxhQUFBM0QsU0FBQThELFlBQUEsZ0JBQUE5RCxTQUFBOEQsV0FDQWpELGlCQUVBYixTQUFBK0QsaUJBQUEsbUJBQUFsRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcyBzb2NpYWwgY2xhc3MgdG8gZ2V0IHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbFwiO1xuLy8gfVxcXG5cbi8vIGFkZHMgc29jaWFsLXNxdWFyZSBjbGFzcyB0byBnZXQgc3F1YXJlIHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbC1zcXVhcmVcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG5IaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuICAgIGxhbmc6IHtcbiAgICAgIHRob3VzYW5kc1NlcDogJywnXG4gICAgfVxufSk7XG5cbmxldCBjaGFydElkQnVsbFJldHVybiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtY29udGFpbmVyLWJ1bGwtcmV0dXJuXCIpO1xuXG4vLyBjaGVja3MgZm9yIHRoZSBjaGFydCBJRCBhbmQgZGlzcGxheXMgYSBiYWNrdXAgaW1hZ2UgaWYgdGhlIGJyb3dzZXIgY2FuJ3QgZmluZCBpdFxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZihjaGFydElkQnVsbFJldHVybi5pbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25vSWQnKTtcbiAgICAgICAgbGV0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhLWJ1bGwtcmV0dXJuXCIpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhcnRBcmVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGFydEFyZWFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IFxuICAgICAgICAvLyBpbnNlcnQgY2hhcnQgc2NyZWVuc2hvdCBoZXJlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtZmFsbGJhY2tcIikuaW5uZXJIVE1MICs9ICc8aW1nIHNyYz1cImh0dHBzOi8vZm0tc3RhdGljLmNuYmMuY29tL2F3c21lZGlhL2NoYXJ0LzIwMTkvMTAvMDgvY2hhcnQtZXJyb3Jfd2lkZS4xNTcwNTY5MzMxMjUyLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWF4LXdpZHRoOjY2MHB4XCI+JztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygneWVzSWQnKVxuICAgIH1cbn0sNTAwKTtcblxuZnVuY3Rpb24gZHJhd0hpZ2hjaGFydHMoKSB7XG4gICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkQnVsbFJldHVybiwge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgc3R5bGVkTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwYWNpbmdCb3R0b206IDI1LFxuICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMDAsXG4gICAgICAgICAgICBzcGFjaW5nTGVmdDogMlxuICAgICAgICB9LCBcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRLZXk6ICcxSnYtNVk2aGotZlNYU2pDcTZzSDFhTktMWTNaaG1qdHBZREU3ZVZjSzZEcydcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIGJhciBjaGFydHMgb25seVxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBQYWRkaW5nOiAwLjFcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBsaW5lIGNoYXJ0cyBvbmx5XG4gICAgICAgIC8vIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIC8vICAgICBzZXJpZXM6IHtcbiAgICAgICAgLy8gICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgLy8gY2xpcDogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAvLyAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdycsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBIaWdoY2hhcnRzLm51bWJlckZvcm1hdCh0aGlzLnZhbHVlLDAsJy4nLCcsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IDM1MDAsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICB0aWNrQW1vdW50OiA4XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgICB9LFxuICAgICAgICBhbm5vdGF0aW9uczogW3tcbiAgICAgICAgICAgIGxhYmVsczogW3tcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4OiAxNTgxNzA0OTY1MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgeTogMCwgLy8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsIC8vIHlBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQnVsbCBtYXJrZXQ8YnI+PGI+NDAwLjUlIGdhaW48L2I+JyxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgYWxsb3dPdmVybGFwOiB0cnVlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTIzNjM2NDE2NTAwMCwgLy8gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0OTUsIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLCAvLyB5QXhpcyBJTkRFWFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCAvLyB4QXhpcyBJTkRFWFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTWFyY2ggOSwgMjAwOScsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIGFsbG93T3ZlcmxhcDogdHJ1ZSBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4OiAxNTgxNzA0OTY1MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgeTogMzQ5NSwgLy8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsIC8vIHlBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRmVicnVhcnkgMTksIDIwMjAnLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgeDogLTUsXG4gICAgICAgICAgICAgICAgYWxsb3dPdmVybGFwOiB0cnVlIFxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH1dLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICBydWxlczogW3tcbiAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIGRyYXdIaWdoY2hhcnRzKCk7XG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRyYXdIaWdoY2hhcnRzKTtcbn0iXX0=
