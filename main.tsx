import {g} from 'https://deno.land/x/php_world/mod.ts';
const {eval: php_eval, phpversion, class_exists, exit} = g;

console.log(await phpversion());
await php_eval('class Hello {}');
console.log(await class_exists('Hello'));
await exit();
