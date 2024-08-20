const [createDate, setCraeteDate] = useState();

useEffect(() => {
  const getDate = async () => {
    await setCraeteDate(oneOrder.createdAt);
  };
  getDate();
}, [oneOrder]);
const formatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
let date = new Date(createDate);
const formattedDate = date.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
// const formattedDate = formatter.format(date);
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

// let date = createDate.slice(0, 10);
console.log(date);
console.log(year);
console.log(month + 1);
console.log(formattedDate);

//   console.log(arriving.slice(0, 4));
//   console.log(arriving.slice(5, 7));
//   console.log(arriving.slice(8, 10));
