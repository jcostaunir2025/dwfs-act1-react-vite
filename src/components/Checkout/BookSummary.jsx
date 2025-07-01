import frontPage from '../../assets/FrontPageBook.webp';
import './BookSummary.css'

const BookSummary = ({ bookInfo }) => {

    return (
        <div className="summaryBook">
            <div className="summaryBook__image-container">
                <img src={frontPage} className="summaryBook__image" alt="FrontPageBook"/>
                <span className="summaryBook__amount">{bookInfo.cantidad}</span>
            </div>
            <div className="summaryBook__info">
                <span className="summaryBook__name">{bookInfo.titulo}</span>
                <span className="summaryBook__price">${bookInfo.precio}</span>
            </div>
        </div>
    );
};
export default BookSummary;