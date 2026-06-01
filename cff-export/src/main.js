import './style.css'
import { Cite } from '@citation-js/core';
import '@citation-js/plugin-cff';
import '@citation-js/plugin-bibtex';


function convert(data, format) {
    const cite = new Cite(data, { output: { style: 'bibtex', type: 'string' }});
    return cite.get();
}

function showOutput(output) {
    const el = document.querySelector('#output');
    el.innerHTML = `<pre>${output}</pre>`
}

function update(data, format) {
    if (data && format) {
        const output = convert(data, format);
        showOutput(output);
    } else {
        showOutput('');
    }
}

const dataInputElement = document.querySelector('#input-cff-data');
const formatInputElement = document.querySelector('#input-format');

var data = dataInputElement.value;
var format = formatInputElement.value;
update(data, format);

document.querySelector('#input-cff-data').onchange = (event) => {
    data = event.target.value || '';
    update(data, format);
}

document.querySelector('#input-format').onchange = (event) => {
    format = event.target.value;
    update(data, format);
}
