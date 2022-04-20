import { renderSearchForm } from './components/SearchForm'
import './style.css'

const $ = document.querySelector.bind(document)

const app = <HTMLDivElement>$('#app')
renderSearchForm(app)