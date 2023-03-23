import styles from "./index.module.scss";

const clients = [
    {
        name: "Modern Home",
        image: "client-logo-1"
    },
    {
        name: "Classic Design Studio",
        image: "client-logo-2"
    },
    {
        name: "Nature Home",
        image: "client-logo-3"
    },
    {
        name: "Brand",
        image: "client-logo-4"
    },
    {
        name: "Stylevintage Interior",
        image: "client-logo-5"
    },
]

function Clients() {
  return (
    <div className={styles.container}>
      {clients.map((client) => {
        return <img key={client.name} src={require(`../../assets/clients-logo/${client.image}.svg`)} alt={client.name} />
      })}
    </div>
  );
}

export default Clients;
