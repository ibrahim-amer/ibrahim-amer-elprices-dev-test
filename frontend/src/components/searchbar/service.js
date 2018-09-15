
import Config from '../../config'

class SearchBarService {
    getAllProductsByName(name, callback) {
        let url = Config.Backend + Config.getAllProductsByNameURL + name;
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                console.log(data)
                if (data && data.length > 0) {
                    callback(data);
                }
                else {
                    callback([]);
                }
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
}

export default SearchBarService