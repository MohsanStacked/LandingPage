import supabase from "../database/supabase.js";

const getAllUsers = async (req, res) => {
  const { data, error } = await supabase.from("Registered_Users").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
};

const addUser = async (req, res) => {
  const { email } = req.body;
  const { data, error } = await supabase
    .from("Registered_Users")
    .insert([{ email }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data);
};

export { getAllUsers, addUser };
