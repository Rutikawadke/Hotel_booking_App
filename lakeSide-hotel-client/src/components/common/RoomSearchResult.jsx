import React, { useState } from "react";
import RoomCard from "../room/RoomCard";
import { Button, Row } from "react-bootstrap";
import RoomPaginator from "./RoomPaginator";

const RoomSearchResults = ({ results, onClearSearch }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 3;
    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    // Check if results is an array before applying slice operation
    const paginatedResults = Array.isArray(results) ? results.slice(startIndex, endIndex) : [];

    return (
        <>
            {results.length > 0 ? (
                <>
                    <h5 className="text-center mt-5">Search Results</h5>
                    <Row>
                        {/* Check if paginatedResults is an array before mapping */}
                        {Array.isArray(paginatedResults) && paginatedResults.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </Row>
                    <Row>
                        {totalResults > resultsPerPage && (
                            <RoomPaginator
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                        <Button variant="secondary" onClick={onClearSearch}>
                            Clear Search
                        </Button>
                    </Row>
                </>
            ) : (
                <p>No results found.</p>
            )}
        </>
    );
};

export default RoomSearchResults;
