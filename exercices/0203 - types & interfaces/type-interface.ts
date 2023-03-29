interface apiData {
  nome: string;
  preco: number;
  descricao: string;
  garantia: number;
  seguroAcidentes: boolean;
  empresaFabricante: {
    nome: string;
    fundacao: number;
    pais: string;
  };
  empresaMontadora: {
    nome: string;
    fundacao: number;
    pais: string;
  };
}

function fetchProduct() {
  fetch("https://api.origamid.dev/json/notebook.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      showProduct(response);
    });
}

fetchProduct();

function showProduct(data: apiData) {
  document.body.innerHTML = `
      <div>
        <h2>Nome: ${data.nome}</h2>
        <p>Preço: ${data.preco}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia: ${data.garantia} anos</p>
        <p>Seguro acidentes: ${data.preco ? "Sim" : "Não"}</p>
        <h2>Empresa fabricante: ${data.empresaFabricante.nome}</h2>
        <p>Nome: ${data.empresaFabricante.nome}</p>
        <p>Fundação: ${data.empresaFabricante.fundacao}</p>
        <h2>Empresa Montadora: ${data.empresaMontadora.nome}</h2>
        <p>Nome: ${data.empresaMontadora.fundacao}</p>
        <p>Fundação: ${data.empresaMontadora.pais}</p>
      </div>
    `;
}
