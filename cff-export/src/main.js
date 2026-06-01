import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Cite } from '@citation-js/core';
import '@citation-js/plugin-cff';
import '@citation-js/plugin-bibtex';
import '@citation-js/plugin-csl';

const OUTPUT_OPTIONS = {
    bibtex: {
        name: 'bibtex',
        options: {},
    },
    apa: {
        name: 'bibliography',
        options: {
            template: 'apa'
        },
    },
}

function convert(data, format) {
    const cite = new Cite(data);
    const formatOptions = OUTPUT_OPTIONS[format];
    return cite.format(
        formatOptions.name,
        { ...formatOptions, format: 'html' },
    );
}

function resetOutput() {
    document.querySelector('#output').innerHTML = '';
    document.querySelector('#error').hidden = true;
}

function showOutput(output) {
    const el = document.querySelector('#output');
    el.innerHTML = output;
}

function showError(err) {
    document.querySelector('#error').hidden = false;
}

function update(data, format) {
    resetOutput();
    if (data && format) {
        let output;
        try {
            output = convert(data, format);
        } catch (err) {
            showError(err);
            return;
        }        
        showOutput(output);
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
