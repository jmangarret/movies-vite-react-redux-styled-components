
export function saveToLocalStorage<T>( items: T[]) {
    localStorage.setItem("items", JSON.stringify(items));
}

export function getFromLocalStorage<T>(): T[] | null {
    const itemsLocal = localStorage.getItem("items");
    if (itemsLocal) {
        return JSON.parse(itemsLocal) as T[];
    }
    return null;
}