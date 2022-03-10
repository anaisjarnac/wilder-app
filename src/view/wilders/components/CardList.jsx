import Card from './Card';

function CardList({wilders}) {

    return (
        <div className="grid grid-cols-5 gap-5">
            {wilders.length>0 && wilders.map((wilder, index) => 
                <Card key={index} wilder={wilder} />
            )}
        </div>
    );
}

export default CardList;