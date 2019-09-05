const loginButton = document.querySelector('#submit');
const registerFormButton = document.querySelector('#register');
const registerButton = document.querySelector('#register-btn');
const categorySelect = document.querySelector('#category-select');
const productSelect = document.querySelector('#product-select');

const register = () => {
  const nomeUsr = document.querySelector('#nameInput').value;
  const emailUsr = document.querySelector('#emailInput').value;
  const loginUsr = document.querySelector('#loginInput').value;
  const senhaUsr = document.querySelector('#passInput').value;
  const confirmPassword = document.querySelector('#checkPassInput').value;
  const user = { nomeUsr, emailUsr, loginUsr, senhaUsr, confirmPassword };

  axios
    .post('/register', user)
    .then(() => {
      alert('Usuário Cadastrado');
      document.querySelector('#register-form').reset();
    })
    .catch(err => alert('Erro ao Cadastrar.'));
};

const authenticate = () => {
  const email = document.querySelector('#inputEmail').value;
  const password = document.querySelector('#inputPassword').value;
  const user = { email, password };

  axios
    .post('/signin', user)
    .then(() => window.location.assign('/'))
    .catch(() => {
      alert('Email e/ou senha inválido(s)');
    });

  email.value = '';
  password.value = '';
};

const loadCategories = () => {
  axios.get('http://localhost:3333/categories').then(data => {
    data.data.map(category => {
      const optionElement = document.createElement('option');
      optionElement.value = category.idCatProd;
      const optionText = document.createTextNode(category.descCatProd);
      optionElement.append(optionText);
      return categorySelect.append(optionElement);
    });
  });
};

const loadProducts = idCategory => {
  axios
    .get(`http://localhost:3333/products/category/${idCategory}`)
    .then(data => {
      data.data.map(product => {
        const optionElement = document.createElement('option');
        optionElement.value = product.idProd;
        const optionText = document.createTextNode(product.descProd);
        optionElement.append(optionText);
        return productSelect.append(optionElement);
      });
      document.querySelector('#product').style.display = 'initial';
    });
};

const loadProduct = () => {
  const idProd = productSelect.value;
  const productTable = document.querySelector('#product-table');
  const productTableBody = document.querySelector('#product-table table tbody');

  axios.get(`http://localhost:3333/products/${idProd}`).then(data => {
    const tableLine = document.createElement('tr');

    const tableCellName = document.createElement('td');
    const tableCellNameText = document.createTextNode(data.data.descProd);
    tableCellName.append(tableCellNameText);

    const tableCellValue = document.createElement('td');
    const tableCellValueText = document.createTextNode(data.data.valorProd);
    tableCellValue.append(tableCellValueText);

    tableLine.append(tableCellName, tableCellValue);

    productTableBody.append(tableLine);

    productTable.style.display = 'initial';
  });
};

if (loginButton) {
  loginButton.onclick = authenticate;
}

if (registerFormButton) {
  registerFormButton.onclick = () => window.location.assign('/register');
}

if (registerButton) {
  registerButton.onclick = register;
}

if (categorySelect) {
  loadCategories();
  categorySelect.onchange = event => {
    loadProducts(event.target.value);
  };
}

if (productSelect) {
  productSelect.onchange = () => {
    const loadProductBtn = document.querySelector('#load-product-btn');
    loadProductBtn.disabled = false;
    loadProductBtn.onclick = loadProduct;
  };
}
