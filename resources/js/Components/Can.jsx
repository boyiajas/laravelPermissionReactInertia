const Can = ({auth, permissions, yes, no = null }) => {

  const allowed = permissions.some(p => auth.user_permissions.includes(p));

  return allowed ? yes : no;
};

export default Can;