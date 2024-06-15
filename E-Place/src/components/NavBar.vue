<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <router-link class="navbar-brand" to="/">
      <h1><img id="logoNav" src="../assets/img/logo.png" alt="VSMR Soluctions"> E-place</h1>
    </router-link>
    <div class="collapse navbar-collapse justify-content-end">
      <template v-if="!isUserArea">
        <button type="button" class="btn custom-btn" @click="openLoginModal">
          <strong>Login</strong>
        </button>
      </template>
      <template v-else>
        <button type="button" class="btn custom-btn" data-bs-toggle="modal" data-bs-target="#escolhaEcommerceModal">
          <strong>Cadastrar Produto</strong>
        </button>
      </template>
    </div>
  </nav>

  <!-- Modal de login -->
  <div id="loginUserModal" class="modal fade" ref="loginModal" tabindex="-1" aria-labelledby="loginUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="login">
          <div class="modal-header">
            <h4 class="modal-title" style="color: #FFBD59; margin-left: 200px; font-size: 30px; font-weight: bold;">Login</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usernameModal">Usuário:</label>
              <input type="text" class="form-control" id="usernameModal" v-model="username" placeholder="Digite seu usuário">
            </div>
            <div class="form-group">
              <label for="passwordModal">Senha:</label>
              <input type="password" class="form-control" id="passwordModal" v-model="password" placeholder="Digite sua senha">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
            <button type="submit" class="btn" style="background-color: #FFBD59; color: white;">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const isUserArea = ref(false);
    const username = ref('');
    const password = ref('');
    const loginModal = ref(null);

    const openLoginModal = () => {
      if (loginModal.value) {
        const modal = new bootstrap.Modal(loginModal.value);
        modal.show();
      }
    };

    const login = () => {
      if (username.value === 'usuario' && password.value === 'senha') {
        if (loginModal.value) {
          const modal = new bootstrap.Modal(loginModal.value);
          modal.hide();

          setTimeout(() => {
            router.push('/perfil');
            isUserArea.value = true; 
          }, 100);
        }
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    };

    return {
      isUserArea,
      username,
      password,
      openLoginModal,
      login,
      loginModal
    };
  }
};
</script>

<style scoped>
.custom-btn {
  background-color: #FFBD59;
  color: rgb(235, 235, 235);
}

#logoNav {
  width: 50px;
  height: 50px;
}

.navEscolhas {
  font-size: 20px;
}

.nav-item {
  padding-left: 20px;
  margin-right: 20px;
}

h1 {
  color: aliceblue;
  font-size: 30px;
}

.btn{
  margin-right: 20px;
}
.btn:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
