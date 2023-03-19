export const logoutservice={
    logout
};

function logout(){
    localStorage.removeItem('user');
}