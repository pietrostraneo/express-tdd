# Esercizio Express TDD

## Obiettivo
Imparare a ragionare in ottica Test-Driven Development (TDD) e a scrivere i nostri Unit Tests.

## Esercizio
Creiamo i test per la nostra funzione `createSlug` che crea gli slug dei nostri post ricevendo come argomento il titolo da convertire e la lista di tutti i post.

### Test da Eseguire:
1. `createSlug` dovrebbe ritornare una stringa.
2. `createSlug` dovrebbe ritornare una stringa in lowercase.
3. `createSlug` dovrebbe ritornare una stringa con gli spazi sostituiti da `-`.
4. `createSlug` dovrebbe incrementare di 1 lo slug quando esiste già.
5. `createSlug` dovrebbe lanciare un errore in caso di titolo non presente o formato errato.
6. `createSlug` dovrebbe lanciare un errore se manca l'array dei post.

Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.

### Bonus
Creiamo una classe `Model` la quale dovrà superare i seguenti test:
1. `Model` dovrebbe essere una classe (crea un'istanza della classe `Model`).
2. L'istanza di `Model` dovrebbe richiedere il nome del file JSON da usare in fase di creazione dell'istanza.
3. L'istanza di `Model` dovrebbe avere il metodo `read`.
4. L'istanza di `Model` dovrebbe avere il metodo `add`.
5. `read` dovrebbe ritornare un array.
6. `add` dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista.

---