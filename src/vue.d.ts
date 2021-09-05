/**
 * Type declaration required to allow imports of .vue files in TypeScript source code.
 */
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
