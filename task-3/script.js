const btnSend = document.querySelector('.btn-search')
const btnSkip = document.querySelector('.btn-skip')
const block = document.querySelector('.block-2')
const key = document.querySelector('.textarea')


btnSend.addEventListener('click', () => {
  block.innerHTML = ''
  if (key.value == '') {
    const line = document.createElement('h1')
    line.classList.add('title')
    line.innerText = 'Вы ввели пустое поле'
    block.append(line)
  } else {
    const link = `http://universities.hipolabs.com/search?country=${key.value}`;
    const table = document.createElement('table')

    key.value = ''
    block.append(table)

    let getInfo = new XMLHttpRequest();
    getInfo.open('GET', link)
    getInfo.responseType = 'json'
    getInfo.onload = () => {
      if (getInfo.response.length == 0) {
        const line = document.createElement('h1')
        line.classList.add('title')
        line.innerText = 'Вы неправильно ввели название страны, или данной страны нет в базе'
        block.append(line)
      } else {
        let j = 1;
        for (let i in getInfo.response) {
          if (j == 1) {
            table.innerHTML = `
            <tr>
              <td>№</td>
              <td>Code</td>
              <td>Country</td>
              <td>Domains</td>
              <td>Name</td>
              <td>State-Provice</td>
              <td>Web-Site</td>
            </tr>
            `
          }
          let row = document.createElement('tr')

          let amount = document.createElement('td')
          amount.innerText = `${j}`

          let code = document.createElement('td')
          code.innerText = getInfo.response[i].alpha_two_code

          let country = document.createElement('td')
          country.innerText = getInfo.response[i].country

          let domains = document.createElement('td')
          domains.innerHTML = `<a href='${getInfo.response[i].domains}'>${getInfo.response[i].domains}</a> `

          let name = document.createElement('td')
          name.innerText = getInfo.response[i].name

          let province = document.createElement('td')
          province.innerText = getInfo.response[i].state - province

          let linkSite = document.createElement('td')
          linkSite.innerHTML = `<a href='${getInfo.response[i].web_pages}'>${getInfo.response[i].web_pages}</a>`

          row.append(amount)
          row.append(code)
          row.append(country)
          row.append(domains)
          row.append(name)
          row.append(province)
          row.append(linkSite)

          table.append(row)
          j++;
        }
      }

    }
    getInfo.send()
  }
  
})


btnSkip.addEventListener('click', () => {
  block.innerHTML = ''
})

