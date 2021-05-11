import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import JokeCounterComponent from "@/components/jokeCounter";
import JokeCounterStore from "@/store/jokeCounter";

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

test("Click add 1", () => {
  const store = new Vuex.Store(JokeCounterStore);
  const wrapper = mount(JokeCounterComponent, {
    localVue: VueWithVuex,
    store,
  });
  const buttons = wrapper.findAll("button");
  buttons.at(0).trigger("click");
  expect(wrapper.vm.countOrJoke).toEqual(1);
});
test("Click get joke", (done) => {
  const store = new Vuex.Store(JokeCounterStore);
  const wrapper = mount(JokeCounterComponent, {
    localVue: VueWithVuex,
    store,
  });
  const buttons = wrapper.findAll("button");
  buttons.at(4).trigger("click");
  setTimeout(() => {
    expect(isNaN(wrapper.vm.countOrJoke)).toEqual(true);
    done();
  }, 2000);
});
