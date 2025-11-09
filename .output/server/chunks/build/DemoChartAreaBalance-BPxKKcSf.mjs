import { _ as _sfc_main$1 } from './AddonApexcharts-cnqu1j3S.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { g as useTailwindColors } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { f as fa } from './fa-DpcB1dqS.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoChartAreaBalance",
  __ssrInlineRender: true,
  setup(__props) {
    const demoAreaBalance = reactive(useDemoAreaBalance());
    function useDemoAreaBalance() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 250;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        colors: [primary.value],
        legend: {
          show: false,
          position: "top"
        },
        grid: {
          show: false,
          padding: {
            left: -10,
            right: 0,
            bottom: 10
          }
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-20T01:30:00.000Z",
            "2022-09-21T02:30:00.000Z",
            "2022-09-22T03:30:00.000Z",
            "2022-09-23T04:30:00.000Z",
            "2022-09-24T05:30:00.000Z",
            "2022-09-25T06:30:00.000Z"
          ]
        },
        yaxis: {
          labels: {
            show: false,
            offsetX: -15
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          },
          y: {
            formatter: (val) => `$${val}`
          }
        }
      };
      const series = ref([
        {
          name: "\u0645\u0648\u062C\u0648\u062F\u06CC",
          data: [3143.16, 4298.49, 2876.54, 5183.76, 4232.87, 10876.56, 9543.12]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonApexcharts = _sfc_main$1;
      _push(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(demoAreaBalance), _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartAreaBalance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
