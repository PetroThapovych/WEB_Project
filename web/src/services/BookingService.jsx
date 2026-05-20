const BookingService = {
  saveBooking: (bookingData) => {
    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(bookingData);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  },
};

export default BookingService;