"use client";
import { CounterStore } from "@/src/stores/counter/couterTest";
import { observer } from "mobx-react";

const counterStore = new CounterStore();

const CounterPage = observer(() => (
  <div>
    <div>Counter</div>
    <div>{counterStore.count}</div>
    <button onClick={() => counterStore.increment()}>Increase</button>
    <button onClick={() => counterStore.decrement()}>DeCrease</button>
  </div>
));

export default CounterPage;
