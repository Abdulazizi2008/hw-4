import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState("");
  const [loading, setLoading] = useState(true);

  const base_url = "https://server-6g6b.onrender.com";

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch(`${base_url}/todos`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getTodos();
  }, []);

  return (
    <>
      <div className="max-w-[1440px] my-0 mx-[auto] py-0 px-[20px]">
        <div className="flex justify-center items-center mt-[100px]">
          <div className="bg-[#1D1825] w-[583px] rounded-[20px] py-[50px] px-[65px]">
            <div className="text-white text-[16px] font-[400]">Task to do </div>
            {loading ? (
              <h1 className="text-white">Loading...</h1>
            ) : (
              todos.map((todo) => {
                return (
                  <div
                    className="w-[432px] p-[21px] bg-[#15101C] rounded-[10px] text-[#9E78CF] mt-[17px]"
                    key={todo.id}
                  >
                    {todo.title}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
