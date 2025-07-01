function sortProducts(filtered, sortValue) {
  if (sortValue === "Name (A-Z)") {
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "Name (Z-A)") {
    return filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortValue === "Price Up") {
    return filtered.slice().sort((a, b) => {
      if (a.price?.Promotion !== 0 && b.price?.Promotion !== 0) {
        return (a.price?.Promotion ?? 0) - (b.price?.Promotion ?? 0);
      } else if (a.price?.Promotion == 0 && b.price?.Promotion !== 0) {
        return (a.price?.Normal ?? 0) - (b.price?.Promotion ?? 0);
      } else if (a.price?.Promotion !== 0 && b.price?.Promotion == 0) {
        return (a.price?.Promotion ?? 0) - (b.price?.Normal ?? 0);
      } else {
        return (a.price?.Normal ?? 0) - (b.price?.Normal ?? 0);
      }
    });
  } else if (sortValue === "Price Down") {
    return filtered.slice().sort((a, b) => {
      if (a.price?.Promotion !== 0 && b.price?.Promotion !== 0) {
        return (b.price?.Promotion ?? 0) - (a.price?.Promotion ?? 0);
      } else if (b.price?.Promotion == 0 && a.price?.Promotion !== 0) {
        return (b.price?.Normal ?? 0) - (a.price?.Promotion ?? 0);
      } else if (b.price?.Promotion !== 0 && a.price?.Promotion == 0) {
        return (b.price?.Promotion ?? 0) - (a.price?.Normal ?? 0);
      } else {
        return (b.price?.Normal ?? 0) - (a.price?.Normal ?? 0);
      }
    });
  } else if (sortValue === "Arrival") {
    return filtered.slice().sort((a, b) => {
      if (a.arrival?.year !== b.arrival?.year) {
        return (b.arrival?.year ?? 0) - (a.arrival?.year ?? 0);
      } else if (a.arrival?.month !== b.arrival?.month) {
        return (b.arrival?.month ?? 0) - (a.arrival?.month ?? 0);
      } else {
        return (b.arrival?.day ?? 0) - (a.arrival?.day ?? 0);
      }
    });
  } else if (sortValue === "Best Seller") {
    return filtered
      .slice()
      .sort((a, b) => (b.sellAmount ?? 0) - (a.sellAmount ?? 0));
  }
  return filtered;
}

export { sortProducts as s };
