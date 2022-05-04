import './css/style.css'
import './css/response.css'
import './css/fonts.css'

import { renderSearchForm } from './components/SearchForm'

const $ = document.querySelector.bind(document)

const app = <HTMLDivElement>$('#app')
renderSearchForm(app)

const resultArea = document.createElement('div')
resultArea.id = 'result-area'
app.insertAdjacentElement('beforeend', resultArea)