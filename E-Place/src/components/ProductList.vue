<template>
  <h2 style="color: white; margin-left: 220px;">Histórico de Produtos</h2>
  <div class="product-list">
    <table style="border-color: black;">
      <thead>
        <tr>
          <th>ID | Imagem | Nome | Marca | Preço | Ecommerce | Qtde. Estoque | Data de Cadastro</th>
        </tr>
      </thead>
      <tbody>
        <div style="background-color: aliceblue;">
        <tr v-for="product in products" :key="product.id" style="border-color: black;">
          <td>{{ product.id }}</td>
          <td><img :src="product.imagem" alt="Imagem do Produto" style="max-width: 100px; max-height: 100px;"></td>
          <td>{{ product.nome }}</td>
          <td>{{ product.marca }}</td>
          <td style="color: #FFBD59">R$ {{ product.preco.toFixed(2) }}</td>
          <td>{{ product.ecommerce }}</td>
          <td>{{ product.estoque }}</td>
          <td style="padding-left: 60px;">{{ formatarData(product.dataCadastro) }}</td>
        </tr>
      </div>
      </tbody>
    </table>

    <!-- Modal de cadastro de produtos -->
    <div id="escolhaEcommerceModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit.prevent="cadastrarProduto" >
            <div class="modal-header">
              <h4 class="modal-title" style="color: #FFBD59; margin-left: 100px; font-weight: bold; font-size: 30px">Cadastre seu produto</h4>
            </div>
            <div class="modal-body" >
              <div class="form-group">
                <label for="nomeModal">Modelo:</label>
                <input type="text" class="form-control" id="nomeModal" v-model="produto.nome" placeholder="Digite o modelo do produto">
              </div>
              <div class="form-group">
                <label for="marcaModal">Marca:</label>
                <input type="text" class="form-control" id="marcaModal" v-model="produto.marca" placeholder="Digite a marca do produto">
              </div>
              <div class="form-group">
                <label for="precoModal">Preço:</label>
                <input type="number" class="form-control" id="precoModal" v-model="produto.preco" placeholder="Digite o preço do produto">
              </div>
              <div class="form-group">
                <label for="ecommerceModal">Ecommerce:</label>
                <input type="text" class="form-control" id="ecommerceModal" v-model="produto.ecommerce" placeholder="Digite o nome do ecommerce">
              </div>
              <div class="form-group">
                <label for="estoqueceModal">Quantidade em Estoque:</label>
                <input type="number" class="form-control" id="ecommerceModal" v-model="produto.estoque" placeholder="Digite a quantidade em estoque">
              </div>
              <div class="form-group" style="padding-top: 10px;">
                <label for="imagemModal">Imagem:</label>
                <input type="file" class="form-control-file" id="imagemModal" @change="onFileChange">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
              <button type="submit" class="btn" style="background-color: #FFBD59; color: white">Cadastrar Produto</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      produto: {
        marca: '',
        nome: '',
        preco: '',
        ecommerce: '',
        estoque: '',
        imagem: null  
      }
    };
  },
  methods: {
    formatarData(data) {
      const date = new Date(data);
      return date.toLocaleDateString('pt-BR');
    },
    cadastrarProduto() {
      // Simular o ID único para o novo produto (geralmente vem do backend)
      const novoId = this.products.length + 1;

      // Adicionar o novo produto à lista de produtos
      this.products.push({
        id: novoId,
        imagem: this.produto.imagem,  
        nome: this.produto.nome,
        marca: this.produto.marca,
        preco: parseFloat(this.produto.preco),
        ecommerce: this.produto.ecommerce,
        estoque:  parseInt(this.produto.estoque),
        dataCadastro: new Date().toISOString() 
      });

      // Limpar os campos do formulário após o cadastro
      this.produto = {
        marca: '',
        nome: '',
        preco: '',
        ecommerce: '',
        estoque: '',
        imagem: null
      };

      // Fechar o modal após o cadastro
      $('#escolhaEcommerceModal').modal('hide');
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Converte a imagem para base64 para exibição na pré-visualização (opcional)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.produto.imagem = reader.result;
        };
      }
    }
  }
};
</script>

<style>
.product-list {
  background-color: #FFBD59;
  padding: 20px;
  border-radius: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #dddddd00;
  font-weight: bold;
  padding: 8px;
}

th {
  background-color: white
}

/* Formulario */
label{
  font-weight: bold;
}

.form-control-file{
  color: white;
  padding-left: 10px;
}

.btn:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
