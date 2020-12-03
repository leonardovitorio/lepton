import { hashSources } from './App.js'

export function html(name){
    return hashSources[name].content;
}