import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    k: api_key,
    d: api_dynamic_text,
    t: api_text,
    h: api_element,
    i: api_iterator,
  } = $api;
  return [
    api_element(
      "section",
      {
        key: 0,
      },
      api_iterator($cmp.items, function (item) {
        return $cmp.showItems
          ? api_element(
              "p",
              {
                key: api_key(1, item.id),
              },
              [api_text("1" + api_dynamic_text(item))]
            )
          : null;
      })
    ),
  ];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
