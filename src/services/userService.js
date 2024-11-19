let selectedRole = null; // Variable para almacenar el rol seleccionado

const userService = {
  // Método para establecer el rol seleccionado
  setSelectedRole(id_role) {
    const roleMap = {
        "1017230904833343489": 'administrador',
        "1015181606819299329": 'docente',
        "1016619378239045633": 'estudiante',
      };
      console.log(id_role);
     selectedRole = roleMap[id_role] || '';
  },

  // Método para obtener el role seleccionado
  getSelectedRole() {
    return selectedRole;
  },

  // Método para limpiar/desseleccioando el role seleccionado
  clearSelectedRole(){
    selectedRole = null;

  }
};

export default userService;